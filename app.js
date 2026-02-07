console.log("Hello! This is my first CI/CD Pipeline.");
console.log("Testing process started...");

const sum = 5 + 5;
if (sum === 10) {
    console.log("Test Passed: Calculation is correct ✅");
} else {
    console.log("Test Failed ❌");
    process.exit(1); 
}