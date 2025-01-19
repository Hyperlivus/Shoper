import {OptionProps} from "@/components/layout/navbar/panel/Panel";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

export const PanelOptions:OptionProps[] = [
    {
        id : "ADD_TO_CART",
        icon : ShoppingCartIcon,
    },
    {
        id : "LIST",
        icon : CompareArrowsIcon,
    }
];