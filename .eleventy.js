module.exports = function (config) {

  config.addFilter("sortByOrderKey", (values) => {

    let vals = [...values]
    vals.sort((a,b) => a.data.order - b.data.order);

    console.log(vals)

    return vals

  })
  config.addPassthroughCopy("./src/css");
  config.addPassthroughCopy("./assets");
  config.addPassthroughCopy("./src/scripts");
  config.addPassthroughCopy("./src/admin");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
