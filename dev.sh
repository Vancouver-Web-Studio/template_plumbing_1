#!/opt/homebrew/bin/bash
SCRIPTS_DIR="src/scripts"
SCRIPTS=("admin.js" "script.js" "slideshow.js")

kill_descendant_processes() {
    local pid="$1"
    local and_self="${2:-false}"
    if children="$(pgrep -P "$pid")"; then
        for child in $children; do
            kill_descendant_processes "$child" true
        done
    fi
    if [[ "$and_self" == true ]]; then
        kill -9 "$pid"
    fi
}

for script in "${SCRIPTS[@]}"; do

    echo $SCRIPTS_DIR/$script | entr -s "yarn --silent browserify $SCRIPTS_DIR/$script 2>&1 | yarn --silent uglifyjs - --mangle --rename --compress --mangle-props > $SCRIPTS_DIR/build/$script" &
done

trap kill_descendant_processes SIGINT

yarn run site &
yarn run sass &
yarn run cms
