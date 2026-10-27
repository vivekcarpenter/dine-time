const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro"); // 👈 यहाँ सिर्फ '/metro' होना चाहिए

const config = getDefaultConfig(__dirname);

// आपकी global.css फ़ाइल src के अंदर है, इसलिए पाथ यही रहेगा
module.exports = withNativeWind(config, { input: "./src/global.css" });
