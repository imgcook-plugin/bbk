/*
 * @Author: Mwing
 * @since: 2020-09-25 15:52:47
 * @lastTime: 2020-09-25 16:01:51
 * @LastAuthor: Mwing
 * @message: 
 * @FilePath: \imgcook\bbk\index.js
 */
/**
 * @name plugin example
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */

const pluginHandler = async options => {
  let { data, filePath, config  } = options;
  // body...
  console.log(options)
  console.log(data, filePath, config)
  return { data, filePath, config };
};

module.exports = (...args) => {
  return pluginHandler(...args).catch(err => {
    console.log(err);
  });
};
