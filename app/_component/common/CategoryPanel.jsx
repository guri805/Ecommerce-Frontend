
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { IoMdClose } from "react-icons/io";
import CategoryCollapse from './CategoryCollapse';

const CategoryPanel = ({ openCategoryPanel, isOpenCatPanel }) => {

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <h3 className='p-2 text-[16px] font-[500] flex justify-between items-center'>
                <span>Shop by Categories</span>
                <IoMdClose
                    className='cursor-pointer text-[20px]'
                    onClick={() => openCategoryPanel(false)}
                />
            </h3>
            <Divider />
            <CategoryCollapse/>
        </Box>
    );

    return (
        <Drawer
            open={isOpenCatPanel}
            onClose={() => openCategoryPanel(false)}
        >
            <div onClick={(e) => e.stopPropagation()}>
                {DrawerList}
            </div>
        </Drawer>
    );
};

export default CategoryPanel;
