// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { add_force_page } from "@/redux/features/shop-filter-slice";

// const usePagination = (items,itemsPerPage) => {
//   const {forcePage} = useSelector(state => state.shopFilter)
//   const [currentItems, setCurrentItems] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   const [itemOffset, setItemOffset] = useState(0);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const endOffset = itemOffset + itemsPerPage;
//     setCurrentItems(items?.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(items.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, items]);


//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     setItemOffset(newOffset);
//   };

//   return {
//     currentItems,
//     pageCount,
//     handlePageClick,
//   }
// }

// export default usePagination;