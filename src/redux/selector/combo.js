import { createSelector } from "reselect"
export const findPolicyById = (policies, id) => policies.find(policy => policy._id === id) 
export const getCombo = activeCombo => activeCombo.items
export const getPolicies = activeCombo => activeCombo.policies
export const groupCombosByPolicy = createSelector(
    [getCombo, getPolicies],
    (combos, policies) => {
        if(combos.length > 0 && policies.length > 0) {
            let result = combos.reduce((acc, curr) => {
                const policy = findPolicyById(policies, curr.policy_id)
                if(acc[curr.policy_id] === undefined) {
                    acc[curr.policy_id] = {
                        combos: [curr],
                        policy
                    }
                } else {
                    acc[curr.policy_id].combos.push(curr)
                }
                
                return acc
            }, {})
            return result
        } else {
            return {}
        }
    }
)
export const calculateSaveMoneyOfComboSelector = createSelector(
    [combo => combo],
    combo => {
        console.log('re')
        const saveMoney = combo.voucher_array.reduce((acc, curr) => acc+ (curr.value * curr.count), 0)
        return saveMoney - combo.value
    }
)

export const calculateSaveMoneyOfCombo = combo => {
    console.log('re')
    const saveMoney = combo.voucher_array.reduce((acc, curr) => acc+ (curr.value * curr.count), 0)
    return saveMoney - combo.value
}