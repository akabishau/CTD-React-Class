const BASE_URL = 'https://api.airtable.com/v0';

export const airtable_url = `${BASE_URL}/${import.meta.env.AIRTABLE_BASE_ID}/${
  import.meta.env.TABLE_NAME
}`;
