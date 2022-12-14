// dream3-background

$(setTimeout(function () {

    alert("그럼 이제 옛날 이야기는 이만하고 \n지금은 어떤지 이야기 해보죠.")

    var first = 0
    var second = 0

    if (!confirm("지금도 장래희망이 있나요?")) {
        alert("괜찮아요 없을수도 있죠.");
        alert("아니면 여전히 제가 불편한가요?\n농담이에요.")
        var first = 1
        var second = 0
        var userInput = 1
    } else {
        var userInput = prompt("그럼 뭔지 물어봐도 될까요?\n말해주실래요?" + "")
        var first = 0
        var second = 1
    }

    if (userInput == null) {
        alert("말하기 싫으실 수도 있죠.")
    } else if (second == 1) {
        alert("항상 응원할게요.")
    }

    if (!confirm("그럼 지금은 장래희망 말고 꿈은 있나요?")) {
        //   '아니오'라고 대답


        // dream6으로 이동
        location.href = "https://parksangeun2016212014.github.io/inter-dream2";

        // '예'라고 대답
    } else {
        //    inter-dream으로 이동
        location.href = "https://parksangeun2016212014.github.io/inter-dream";
    }
}, 1000));

