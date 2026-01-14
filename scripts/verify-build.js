const React = require('react');
const ExpandText = require('../index.js'); // Imports via the main entry point defined in package.json

console.log('Verifying build artifact...');

if (typeof ExpandText === 'function' || (typeof ExpandText === 'object' && typeof ExpandText.default === 'function')) {
    // Check if it's a valid React component (function)
    console.log('✅ Success: Component exported correctly.');
} else {
    console.error('❌ Error: Export is not a function/component.', ExpandText);
    process.exit(1);
}

// Optional: specific check for the default export if using Babel interop
const Component = ExpandText.default || ExpandText;
console.log('Exported item:', Component);
