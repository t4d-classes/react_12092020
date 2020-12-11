import { useState, useEffect, useCallback } from 'react';

export function useListAsync(restUrl) {

  const [items, setItems] = useState([]);

  const refreshItems = useCallback(() => {

    return fetch(restUrl)
      .then(res => res.json())
      .then(items => setItems(items));

  }, [restUrl]);

  useEffect(() => {
    refreshItems();
  }, [refreshItems]);

  const appendItem = useCallback((newItem) => {
    return fetch(restUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    }).then(() => refreshItems());
  }, [refreshItems, restUrl]);

  const replaceItem = useCallback((item) => {
    return fetch(restUrl + '/' + encodeURIComponent(item.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    }).then(() => refreshItems());
  }, [refreshItems, restUrl]);

  const removeItem = useCallback((itemId) => {
    return fetch(restUrl + '/' + encodeURIComponent(itemId), {
      method: 'DELETE',
    }).then(() => refreshItems());
  }, [refreshItems, restUrl]);

  return [items, appendItem, replaceItem, removeItem];
}