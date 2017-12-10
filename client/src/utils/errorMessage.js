// error: {
//   error: Object,
//   item: Hash,
//   type: String, // 'getAll', 'create', 'update', 'delete', 'complete', 'uncomplete'
// }
export const buildErrorMessage = (_error) => {
  // TODO: Add more detailed error messages
  const { error, type, item } = _error

  if (error.response === undefined) {
    if (error.message.match(/timeout of .+ exceeded/)) {
      return { style: 'danger', text: `Timed out!` }
    }
  }

  switch (type) {
    case 'getAll':
      return { style: 'danger', text: `Failed to load items` }
    case 'create':
      return { style: 'danger', text: `Failed to create an item` }
    case 'update':
      return { style: 'danger', text: `Failed to update item(id=${item.id})` }
    case 'delete':
      return { style: 'danger', text: `Failed to delete item(id=${item.id})` }
    case 'complete':
      return { style: 'danger', text: `Failed to complete item(id=${item.id})` }
    case 'uncomplete':
      return { style: 'danger', text: `Failed to uncomplete item(id=${item.id})` }
    default:
      return { style: 'danger', text: `Unknown error occured` }
  }
}
