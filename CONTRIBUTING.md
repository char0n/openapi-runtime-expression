# Contributing to openapi-runtime-expression

As a contributor, here are the guidelines we would like you to follow:

- [Submission Guidelines](#submit)
- [Coding Rules](#rules)
- [Commit Message Guidelines](#commit)

## <a name="submit"></a> Submission Guidelines

### <a name="submit-pr"></a> Submitting a Pull Request (PR)
Before you submit your Pull Request (PR) consider the following guidelines:

* Make your self familiar with [git rebase workflow][git-rebase-workflow]
* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run the full test suite, as described in the developer documentation,
  and ensure that all tests pass.
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

* In GitHub, send a pull request to `openapi-runtime-expression:main`.
* If we suggest changes then:
    * Make the required updates.
    * Re-run the test suites to ensure tests are still passing.
    * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

      ```shell
      git rebase master -i
      git push -f
      ```

That's it!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull 
    ```

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* Every cryptic code block **must be documented**.
* We follow [Airbnb JavaScript Style Guide][js-style-guide], but wrap all code at
  **120 characters**. We use eslint to enforce the codestyle.

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the change log**.

### Commit Message Format

Commit messages must comply with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
[js-style-guide]: https://github.com/airbnb/javascript
[git-rebase-workflow]: https://randyfay.com/content/rebase-workflow-git
