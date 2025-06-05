function coreLogic(n) {
    const ops = [];
    ops.push("mul 999999999");
    ops.push("digit");
    if (n === 81) {
        ops.push("!");
    } else {
        ops.push(`add ${n - 81}`);
        ops.push("!");
    }
    return ops;
}
