FROM algolia/docsearch-scraper

COPY config.json /app/config.json
COPY entrypoint.sh /app/entrypoint.sh
COPY .env /app/.env

RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]
