# Create-json-list-for-AWS-Languages

To make a list of AWS supported languages from [What Is Amazon Transcribe?](https://docs.aws.amazon.com/transcribe/latest/dg/what-is-transcribe.html)

## Usage

```
npm install
```

run 

```
npm start
```

## How does it work

The script scraped the AWS STT page, that contains the info on the [available languages](https://docs.aws.amazon.com/transcribe/latest/dg/what-is-transcribe.html).

<!-- Using [`table-scraper`](https://www.npmjs.com/package/table-scraper) which finds the table in the page and converts it to a json.  -->

The json list of languages.

## Example Output 

See [`./languages.json`](./languages.json) if interested in `json `representation.

List of languge in the repo is up to date to the 27th November Aug 2019.


see belwo or in[`./languages.html`](./languages.html) for html element to add to your front end.


## Contributor

- [Pietro](http://twitter.com/pietropassarell)