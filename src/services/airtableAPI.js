const BASE_URL = 'https://api.airtable.com/v0/';
export const airtable_url = `${BASE_URL}${
  import.meta.env.VITE_AIRTABLE_BASE_ID
}/${import.meta.env.VITE_TABLE_NAME}`;

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
  'Content-Type': 'application/json'
};

export const fetchTodos = async () => {
  try {
    const response = await fetch(airtable_url, { headers });
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
    throw new Error('Something went wrong while interracting with API');
  }
};

export const addTodo = async title => {
  try {
    const response = await fetch(airtable_url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        fields: { title }
      })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const record = await response.json();
    return {
      id: record.id,
      title: record.fields.title
    };
  } catch (error) {
    console.error('Add error:', error);
    throw new Error('Something went wrong while interracting with API');
  }
};

export const removeTodo = async id => {
  try {
    const response = await fetch(`${airtable_url}/${id}`, {
      method: 'DELETE',
      headers
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Remove error:', error);
    throw new Error('Something went wrong while interracting with API');
  }
};
