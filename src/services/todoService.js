const BASE_URL = `https://api.airtable.com/v0/${
  import.meta.env.VITE_AIRTABLE_BASE_ID
}/${import.meta.env.VITE_TABLE_NAME}`;

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
  'Content-Type': 'application/json'
};

export const fetchTodos = async () => {
  try {
    const response = await fetch(`${BASE_URL}`, { headers });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.records.map(record => ({
      id: record.id,
      title: record.fields.title
    }));
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
