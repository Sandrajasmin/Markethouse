const DiscountProcenteg = (discount, orginalPrice) => {
    return Math.round((1 - discount / orginalPrice) * 100).toString()
}

export default DiscountProcenteg;