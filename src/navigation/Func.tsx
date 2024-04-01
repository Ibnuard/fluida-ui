import { useNavigation, type ParamListBase } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

function useNav<T extends ParamListBase>() {
  const navigation = useNavigation<NativeStackNavigationProp<T>>();
  return navigation;
}

export { useNav };
