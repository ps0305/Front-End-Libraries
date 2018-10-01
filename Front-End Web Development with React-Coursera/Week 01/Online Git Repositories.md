### Objectives and Outcomes
In this exercise you will learn about how to set up and use an online Git repository and synchronize your local Git repository with your online repository. At the end of this exercise, you will be able to:

* Set up the online repository as a remote repository for your local Git repository
* Push your commits to the online repository
* Clone an online Git repository to your computer

#### Setting up an Online Git repository
* Sign up for an account either at Bitbucket (https://bitbucket.org) or GitHub (https://github.com).
* Then set up an online Git repository named git-test. Note the URL of your online Git repository. Note that private repositories on GitHub requires a paid account, and is not available for free accounts.

Set the local Git repository to set its remote origin
* At the prompt, type the following to set up your local repository to link to your online Git repository:
```js
git remote add origin <repository URL>
```

Pushing your commits to the online repository
* At the prompt, type the following to push the commits to the online repository:
```js
git push -u origin msater
```
Cloning an online repository
* To clone an online repository to your computer, type the following at the prompt:
```js
git clone <repository name>
