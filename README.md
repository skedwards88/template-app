## package.json

remove deps if not workd game:

    "@skedwards88/word_lists": "latest",
    "@skedwards88/word_logic": "2.0.7",
    "@babel/plugin-syntax-import-assertions": "^7.22.5",

remove if uneeded

    "seedrandom": "3.0.5"
    "lodash.clonedeep": "^4.5.0",

bump package versions

## index.js

if custom url instead of default gh pages url, adjust path and scope vars

## .github/ISSUE_TEMPLATE

- If this is a word game:
  - Add the `.github/ISSUE_TEMPLATE/add_word.yaml` and `.github/ISSUE_TEMPLATE/remove_word.yaml` issue templates.
- Add any issue templates

## workflows

- If this is a word game:
  - Add the `repository_dispatch` trigger to the `.github/workflows/deploy.yml` workflow
  - Add the steps to update the word list to the `.github/workflows/deploy.yml` workflow

## jest

- If this is not a word game:
  - Remove the transform ignore patterns for word lists/word logic from jest.config.cjs

## readme

customize

## index.html

adust the theme color in index.html
adjust the name and description in index.html
add favicon image, update icons in webpack and in index.html

## privacy

update repo and urls in privacy html

## manifest.json

- if custom url, update start_url
- update name
- update short_name
- update description
- update id
- change or remove orientation if needed
- update background and theme color
- update categories
- update icons
- update screenshots

## images

add an svg favicon and reflect it in webpack and in manifest and in html

delete unneeded icons

## `src/components/Heart.js`

If this isn't a word game, remove the word data attribution

## todo

search for crossjig

TODO disable all workflows in the template repo
