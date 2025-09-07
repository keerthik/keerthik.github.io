# kOrc.me

Source code for my personal website, https://korc.me

## Local build
```
mkdir korcme
cd korcme
git init
git remote add origin git@github.com:keerthik/keerthik.github.io.git
git fetch
git switch master
git pull
brew install hugo
hugo server -D #to show drafts
```

Hugo is in active development, and breaking changes are possible between versions. See the version referenced in hugo.yml and install that specific version if pages are broken.

## Deployment
Depends on github actions via [hugo.yml](.github/workflows/hugo.yml).

## Borrowed systems
- [Magnific Image Pop-up module](https://gist.github.com/zjeaton/0cdd7e4bed9d292ab6f3d76b0369f16d)
- [List topics by category](https://github.com/jmooring/hugo-testing/tree/hugo-forum-topic-31882)
	(enhanced a bit in [my edits](https://github.com/keerthik/keerthik.github.io/blob/hugo/themes/hugo-theme-nightfall/layouts/_default/list.html))
- [Default front-matter](https://digitaldrummerj.me/hugo-default-front-matter/)

## Progress
I use [git issues on this repo](https://github.com/keerthik/keerthik.github.io/issues) to note next steps and manage progress and tasks.