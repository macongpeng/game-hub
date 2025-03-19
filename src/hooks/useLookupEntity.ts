/**
 * A generic hook for looking up entities by ID
 * This hook can be used with any entity that has an id property
 */
function useLookupEntity<T extends { id: number }>(
  entities: T[] | undefined, 
  entityId: number | null | undefined
): T | undefined {
  if (!entities || !entityId) return undefined;
  return entities.find(entity => entity.id === entityId);
}

export default useLookupEntity; 