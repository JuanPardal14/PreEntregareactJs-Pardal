
export const getcartquantity = (cart) => {
    return cart.reduce ((acc, item) => acc + item.quantity, 0)
};

export const getcarttotal = (cart) => {
    return cart.reduce((acc ,item)=> acc + item.quantity * item.price, 0);
};