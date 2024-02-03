def solution(numer1, denom1, numer2, denom2):
    son = numer1*denom2 + numer2*denom1
    mom = denom1*denom2
    answer = []
    for i in range(son,0,-1):
        if son%i == 0 and mom%i == 0:
            d=i
            break;
    answer.append(son/d)
    answer.append(mom/d)
    return answer