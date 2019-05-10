"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var defaultFieldTemplate = function (_a) {
    var getLabel = _a.getLabel, defaultText = _a.defaultText, selectedItem = _a.selectedItem, clear = _a.clear, containerStyle = _a.containerStyle, textStyle = _a.textStyle, clearImage = _a.clearImage;
    return (React.createElement(react_native_1.View, { style: [
            {
                borderBottomColor: 'grey',
                borderBottomWidth: 0,
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 10
            },
            containerStyle
        ] },
        React.createElement(react_native_1.Text, { style: textStyle }, (selectedItem && getLabel(selectedItem)) || defaultText),
        selectedItem && (React.createElement(react_native_1.TouchableOpacity, { style: {
               
            },  }, clearImage || (React.createElement(react_native_1.Image, { style: { width: 16, height: 16 } }))))));
};
exports.default = defaultFieldTemplate;
//# sourceMappingURL=defaultFieldTemplate.js.map