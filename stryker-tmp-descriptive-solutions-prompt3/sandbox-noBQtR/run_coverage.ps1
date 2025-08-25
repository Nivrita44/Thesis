# This script runs Jest for each test file individually to generate
# a separate coverage report AND a separate log file for each run.

# --- Configuration ---
# The total number of problems you want to process.
$TOTAL_PROBLEMS = 50
# The base directory where the generated tests are stored.
$BASE_TEST_DIR = "Claude/tests-algorithm"
# The base directory where the coverage reports will be saved.
$BASE_COVERAGE_DIR = "claude_coverage/coverage-algorithm"
# The base directory where the terminal output logs will be saved.
$BASE_LOG_DIR = "claude_logs/coverage-algorithm"

# --- Main Logic ---
Write-Host "Starting individual coverage and log generation..."

# Create the base directory for logs to avoid errors
New-Item -ItemType Directory -Force -Path $BASE_LOG_DIR | Out-Null

# Loop from 1 to TOTAL_PROBLEMS
for ($i = 1; $i -le $TOTAL_PROBLEMS; $i++) {
  # Loop through the 3 prompt variations for each problem
  foreach ($j in 1..3) {
    # Construct the path to the specific test file
    $TEST_FILE_PATH = "$BASE_TEST_DIR/tests-prompt${j}/${i}_prompt${j}.test.js"
    # Construct the desired output directory for the coverage report
    $COVERAGE_OUTPUT_PATH = "$BASE_COVERAGE_DIR/${i}prompt${j}"
    # Construct the full path for the output log file
    $LOG_FILE_PATH = "$BASE_LOG_DIR/${i}prompt${j}.log"

    # Check if the test file actually exists before trying to run it
    if (Test-Path -Path $TEST_FILE_PATH -PathType Leaf) {
      Write-Host "------------------------------------------------------------------"
      Write-Host "Processing Test:        $TEST_FILE_PATH"
      Write-Host "Outputting Coverage to:   $COVERAGE_OUTPUT_PATH"
      Write-Host "Saving Terminal Output to: $LOG_FILE_PATH"
      Write-Host "------------------------------------------------------------------"

      # *** THIS IS THE MODIFIED LINE ***
      # Added --no-color flag to force plain text output without special characters.
      & npx jest $TEST_FILE_PATH --coverage --coverageDirectory $COVERAGE_OUTPUT_PATH --no-color *>&1 | Out-File -FilePath $LOG_FILE_PATH

    } else {
        Write-Host "Skipping... Test file not found: $TEST_FILE_PATH" -ForegroundColor Yellow
    }
  }
}

Write-Host "`nAll individual coverage reports and log files have been generated." -ForegroundColor Green