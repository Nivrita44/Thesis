# --- Script Parameters ---
# This block defines the parameters you can pass to the script from the command line.
param(
  [Parameter(Mandatory=$true)]
  [int]$ProblemNumber,

  [Parameter(Mandatory=$true)]
  [int]$PromptNumber
)

# --- Configuration ---
# The base directory where the generated tests are stored.
$BASE_TEST_DIR = "Claude/tests-descriptive"
# The base directory where the coverage reports will be saved.
$BASE_COVERAGE_DIR = "claude_coverage/coverage-descriptive"
# The base directory where the terminal output logs will be saved.
$BASE_LOG_DIR = "claude_logs/coverage-descriptive"

# --- Main Logic ---

# Create the base directory for logs to avoid errors
New-Item -ItemType Directory -Force -Path $BASE_LOG_DIR | Out-Null

# Construct the path to the specific test file using the input parameters
$TEST_FILE_PATH = "$BASE_TEST_DIR/tests-prompt${PromptNumber}/${ProblemNumber}_prompt${PromptNumber}.test.js"
# Construct the desired output directory for the coverage report
$COVERAGE_OUTPUT_PATH = "$BASE_COVERAGE_DIR/${ProblemNumber}prompt${PromptNumber}"
# Construct the full path for the output log file
$LOG_FILE_PATH = "$BASE_LOG_DIR/${ProblemNumber}prompt${PromptNumber}.log"

# Check if the test file actually exists before trying to run it
if (Test-Path -Path $TEST_FILE_PATH -PathType Leaf) {
  Write-Host "------------------------------------------------------------------"
  Write-Host "Processing Test:        $TEST_FILE_PATH"
  Write-Host "Outputting Coverage to:   $COVERAGE_OUTPUT_PATH"
  Write-Host "Saving Terminal Output to: $LOG_FILE_PATH"
  Write-Host "------------------------------------------------------------------"

  # Execute the Jest command and redirect all output (stdout and stderr) to the log file.
  & npx jest $TEST_FILE_PATH --coverage --coverageDirectory $COVERAGE_OUTPUT_PATH --no-color *>&1 | Out-File -FilePath $LOG_FILE_PATH

  Write-Host "`nTest complete. Log file created at: $LOG_FILE_PATH" -ForegroundColor Green

} else {
    Write-Host "Skipping... Test file not found: $TEST_FILE_PATH" -ForegroundColor Yellow
}