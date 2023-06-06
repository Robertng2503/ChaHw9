// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Mapping license values to badge URLs
    const licenseBadges = {
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache-2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GPL-3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      // Add more licenses and badge URLs as needed
    };

    // Return the badge corresponding to the license
    return licenseBadges[license] || '';
  } else {
    return ''; // Empty string if no license is provided
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // Mapping license values to license URLs
    const licenseLinks = {
      MIT: 'https://opensource.org/licenses/MIT',
      'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0',
      // Add more licenses and license URLs as needed
    };

    // Return the license link corresponding to the license
    return licenseLinks[license] || '';
  } else {
    return ''; // Empty string if no license is provided
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // Mapping license values to license sections
    const licenseSections = {
      MIT: '## License\n\nThis project is licensed under the [MIT License](https://opensource.org/licenses/MIT).',
      'Apache-2.0': '## License\n\nThis project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).',
      'GPL-3.0': '## License\n\nThis project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).',
      // Add more licenses and license sections as needed
    };

    // Return the license section corresponding to the license
    return licenseSections[license] || '';
  } else {
    return ''; // Empty string if no license is provided
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}
  
  ## Table of Contents
  - Description
  - Installation
  - Usage
  - Contributting
  - Test
  
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}


  ## Contributting
  ${answers.contributing}

  ## Test
  ${answers.tests}

  ${renderLicenseSection(answers.license)}

## Questions

If you have any questions, you can reach me through the following channels:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
  `;
}

module.exports = generateMarkdown;
