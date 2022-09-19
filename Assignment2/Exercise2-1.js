const PlaceService = (function () {

    let PlaceArr = []

    function loadData(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                PlaceArr = data
                callback(data)
            })
    }

    function getDataByIndex(index) {

        return PlaceArr[index]
    }

    return {loadData, getDataByIndex}
}) ()
