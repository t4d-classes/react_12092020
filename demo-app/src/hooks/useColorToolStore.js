import { useList } from './useList';

export function useColorToolStore(initialColors) {

  const [colors, appendColor, , removeColor] = useList(initialColors);

  return {
    colors, appendColor, removeColor,
  };

}