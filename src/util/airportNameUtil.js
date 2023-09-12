export function code2Korean(code) {
  let korean;
  switch (code) {
    case "ICN":
      korean = "인천 공항";
      break;
    case "GMP":
      korean = "김포 공항"
      break;
    case "YNY" :
      korean = "양양 공항"
      break;
    case "MWX" :
      korean = "무안 공항"
      break
    case "CJU":
      korean = "제주 공항"
      break
    case "TAE":
      korean = "대구 공항"
      break
    case "CJJ":
      korean = "청주 공항"
      break
    case "PUS":
      korean = "부산 공항"
      break

  }
  return korean;
}

export function korean2Code(korean) {
  let code;
  switch (korean) {
    case "인천 공항":
      code = "ICN";
      break;
    case "김포 공항":
      code = "GMP"
      break;
    case "양양 공항" :
      code = "YNY"
      break;
    case "무안 공항" :
      code = "MWX"
      break
    case "제주 공항":
      code = "CJU"
      break
    case "대구 공항":
      code = "TAE"
      break
    case "청주 공항":
      code = "CJJ"
      break
    case "부산 공항":
      code = "PUS"
      break
  }
  return code
}

export default {code2Korean, korean2Code}