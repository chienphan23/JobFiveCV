export const formatCurrency = (amount) => {
    // Format amount to Vietnamese currency
    const formattedAmount = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(amount);
 
    return formattedAmount;
};