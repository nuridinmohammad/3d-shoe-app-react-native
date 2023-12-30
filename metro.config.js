const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    assetExts: ["glb", "gltf", "png", "jpg"],
    sourceExts: ["js", "jsx", "json", "ts", "tsx", "cjs"],
  },
};

module.exports = mergeConfig(defaultConfig, config);
