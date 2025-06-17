#!/usr/bin/env node

/**
 * 🚀 Enterprise CI/CD Setup Script
 *
 * This script helps set up the complete CI/CD environment for the
 * CypherpunkSecurity website with enterprise-grade DevOps practices.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Enterprise CI/CD Setup...\n');

// ANSI colors for better console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
};

const log = {
  success: msg => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  warning: msg => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  error: msg => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  info: msg => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  step: msg =>
    console.log(`${colors.cyan}${colors.bold}🔧 ${msg}${colors.reset}\n`),
};

/**
 * Check if we're in a git repository
 */
function checkGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if required files exist
 */
function checkRequiredFiles() {
  const requiredFiles = [
    'package.json',
    '.github/workflows/ci.yml',
    '.github/workflows/cd.yml',
    '.github/workflows/security.yml',
    'jest.config.js',
    'tsconfig.json',
  ];

  const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));

  if (missingFiles.length > 0) {
    log.error(`Missing required files: ${missingFiles.join(', ')}`);
    return false;
  }

  return true;
}

/**
 * Install dependencies
 */
function installDependencies() {
  log.step('Installing Dependencies');

  try {
    log.info('Running npm install...');
    execSync('npm install', { stdio: 'inherit' });
    log.success('Dependencies installed successfully');
  } catch (error) {
    log.error('Failed to install dependencies');
    throw error;
  }
}

/**
 * Setup Husky for Git hooks
 */
function setupHusky() {
  log.step('Setting up Git Hooks with Husky');

  try {
    if (!fs.existsSync('.husky')) {
      execSync('npx husky-init', { stdio: 'inherit' });
    }

    // Create pre-commit hook
    const preCommitHook = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
`;

    fs.writeFileSync('.husky/pre-commit', preCommitHook);
    execSync('chmod +x .husky/pre-commit');

    log.success('Husky git hooks configured');
  } catch (error) {
    log.warning('Failed to setup Husky - you can set it up manually later');
  }
}

/**
 * Setup lint-staged configuration
 */
function setupLintStaged() {
  log.step('Configuring Lint-Staged');

  const lintStagedConfig = {
    'lint-staged': {
      '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
      '*.{json,md,yml,yaml}': ['prettier --write'],
      '*.{ts,tsx}': ['tsc --noEmit'],
    },
  };

  // Update package.json with lint-staged config
  const packageJsonPath = 'package.json';
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  Object.assign(packageJson, lintStagedConfig);

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n'
  );

  log.success('Lint-staged configuration added to package.json');
}

/**
 * Create environment files
 */
function createEnvironmentFiles() {
  log.step('Creating Environment Configuration Files');

  // Create .env.example
  const envExample = `# CypherpunkSecurity Environment Variables

# Application
NODE_ENV=development
NEXT_PUBLIC_ENVIRONMENT=development

# Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id-here

# Contact Form (optional)
NEXT_PUBLIC_CONTACT_API_URL=https://api.example.com/contact

# Security Headers
NEXT_PUBLIC_CSP_REPORT_URI=https://your-domain.report-uri.com/r/d/csp/enforce
`;

  if (!fs.existsSync('.env.example')) {
    fs.writeFileSync('.env.example', envExample);
    log.success('Created .env.example file');
  }

  if (!fs.existsSync('.env.local')) {
    fs.writeFileSync(
      '.env.local',
      '# Local environment variables\n# Copy from .env.example and customize\n'
    );
    log.success('Created .env.local file');
  }
}

/**
 * Run initial tests
 */
function runInitialTests() {
  log.step('Running Initial Tests');

  try {
    log.info('Running test suite...');
    execSync('npm run test:ci', { stdio: 'inherit' });
    log.success('All tests passed!');
  } catch (error) {
    log.warning('Some tests failed - please review and fix before deploying');
  }
}

/**
 * Check build process
 */
function testBuild() {
  log.step('Testing Build Process');

  try {
    log.info('Running build...');
    execSync('npm run build', { stdio: 'inherit' });
    log.success('Build completed successfully!');
  } catch (error) {
    log.error('Build failed - please fix build errors before deploying');
    throw error;
  }
}

/**
 * Display setup completion message
 */
function displayCompletionMessage() {
  console.log(
    `\n${colors.green}${colors.bold}🎉 CI/CD Setup Complete!${colors.reset}\n`
  );

  console.log(`${colors.cyan}Next Steps:${colors.reset}`);
  console.log(`
1. 🔐 Configure GitHub Secrets:
   ${colors.yellow}Go to your GitHub repository → Settings → Secrets and variables → Actions${colors.reset}
   
   Required Secrets:
   • NETLIFY_AUTH_TOKEN
   • NETLIFY_STAGING_SITE_ID  
   • NETLIFY_PRODUCTION_SITE_ID
   • SNYK_TOKEN (optional)
   • SLACK_WEBHOOK (optional)
   • CODECOV_TOKEN (optional)

2. 🌿 Set up Branch Protection Rules:
   ${colors.yellow}Go to Settings → Branches → Add rule${colors.reset}
   
   Protect 'main' branch with:
   • Require pull request reviews
   • Require status checks to pass
   • Require up-to-date branches

3. 🔄 Configure Environments:
   ${colors.yellow}Go to Settings → Environments${colors.reset}
   
   Create environments:
   • staging (for develop branch)
   • production (for main branch, with protection rules)

4. 📱 Setup Slack Notifications (Optional):
   • Create a Slack app and webhook
   • Add webhook URL to GitHub secrets as SLACK_WEBHOOK
   • Create channels: #deployments, #alerts, #security-alerts

5. 🚀 Test the Pipeline:
   • Create a feature branch: ${colors.yellow}git checkout -b feature/test-pipeline${colors.reset}
   • Make a small change and commit
   • Push and create a Pull Request
   • Watch the CI/CD pipeline in action!

${colors.blue}📚 Documentation:${colors.reset}
• Full setup guide: ${colors.yellow}docs/CI-CD-SETUP.md${colors.reset}
• Troubleshooting: Check GitHub Actions logs
• Questions? Create a GitHub issue

${colors.green}Happy coding! 🚀${colors.reset}
`);
}

/**
 * Main setup function
 */
async function main() {
  try {
    // Pre-flight checks
    if (!checkGitRepository()) {
      log.error('This is not a Git repository. Please initialize Git first.');
      process.exit(1);
    }

    if (!checkRequiredFiles()) {
      log.error(
        'Required CI/CD files are missing. Please ensure all workflow files are in place.'
      );
      process.exit(1);
    }

    // Setup steps
    installDependencies();
    setupHusky();
    setupLintStaged();
    createEnvironmentFiles();
    runInitialTests();
    testBuild();

    // Complete
    displayCompletionMessage();
  } catch (error) {
    log.error(`Setup failed: ${error.message}`);
    process.exit(1);
  }
}

// Run the setup
if (require.main === module) {
  main();
}

module.exports = { main };
