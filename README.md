# Open SDG
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FOpenSDGde%2Fopen-sdg.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FOpenSDGde%2Fopen-sdg?ref=badge_shield)


This is a platform for collecting and disseminating data for the Sustainable Development Goal global indicators.

## Documentation

Complete documentation can be found [here](https://open-sdg.readthedocs.io/en/latest/).

## Development

To see the platform while developing (requires Ruby and Python):

```
make serve
```

To run the tests (also requires Node.js):

```
make test
```

To run particular tests:

```
# Test for broken links, images, and other HTML issues.
make test.html
# Test for broken functionality.
make test.features
# Test for accessibility problems.
make test.accessibility
```

To clean up (remove temporary files and stop the web server) after tests:

```
make clean
```


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FOpenSDGde%2Fopen-sdg.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FOpenSDGde%2Fopen-sdg?ref=badge_large)