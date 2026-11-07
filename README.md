# Text Frequency

Count the most frequent words in a passage.

## Run

npm test and python -m http.server 8000 (visit http://localhost:8000)

## Example input (JSON)

{
  "text": "code test code build test code"
}

## Expected output fields (JSON)

{
  "ranking": [
    {
      "word": "code",
      "count": 3
    },
    {
      "word": "test",
      "count": 2
    },
    {
      "word": "build",
      "count": 1
    }
  ]
}

## Engineering

Standalone functional implementation, automated CI tests and no third-party runtime dependencies. Educational portfolio example: review for production readiness before deployment.

MIT License - https://github.com/santdevfull
