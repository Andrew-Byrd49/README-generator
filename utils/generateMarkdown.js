function generateMarkdown(userResponses, userInfo, data) {

  // Based on the user responses, generate table of contents
  let draftToC = '## Table of Contents';

  if (userResponses.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftToC += `
  * [Tests](#tests)` };

  // Generate the contents of the README
  let draftMarkdown =
  `# ${userResponses.title}

  ## Description
  *A little about this project.*

  ${userResponses.description}
  `

  draftMarkdown += draftToC;

  draftMarkdown += `
  * [License](#license)`;

  // Installation section - optional
  if (userResponses.installation !== '') {
    draftMarkdown +=
    `

    ## Installation

    *Steps to istalling and running this project:*

    ${userResponses.installation}`
  };

  // Usage section - optional
  if (userResponses.usage !== '') {
    draftMarkdown +=

    `

    ## Usage

    *Instuctions & examples:*

    ${userResponses.usage}`
  };

  // Contributing - optional
  if (userResponses.contributing !== '') {

    draftMarkdown +=

  `

  ## Contributing

  *If you would like to contribute it, you can follow these guidelines for how to do so.*

  ${userResponses.contributing}`
  };

  // Installation section - optional
  if (userResponses.tests !== '') {
    draftMarkdown +=
    `

    ## Tests

    *Include tests for application:*

    ${userResponses.tests}`
  };

  // License - required
  draftMarkdown +=
  `

  ## License

  ${userResponses.license}
  `;

  // About developer section
  let draftDev =
  `
  ---

  ## Questions?

  For any questions, please contact me with the information below:

  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {

    draftDev +=
    `
    Email: ${userInfo.email}
    `};

    draftMarkdown += draftDev;

    return draftMarkdown;

};

module.exports = generateMarkdown;
