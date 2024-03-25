// script.js
$(document).ready(function () {
    $('#analyzeBtn').on('click', function () {
        const imageUrl = $('#imageUrl').val().trim();
        if (imageUrl !== '') {
            $('#loading').show();
            $.ajax({
                type: 'POST',
                url: 'https://api.clarifai.com/v2/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs',
                headers: {
                    'Authorization': 'Key bbc22af225694f13ab678711c67f3c1f',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    "inputs": [
                        {
                            "data": {
                                "image": {
                                    "url": imageUrl
                                }
                            }
                        }
                    ]
                }),
                success: function (response) {
                    $('#loading').hide();
                    $('#analysisResults').removeClass('hidden');
                    $('#conceptsList').empty();
                    const concepts = response.outputs[0].data.concepts;
                    concepts.slice(0, 1).forEach(function (concept) {
                        $('#conceptsList').append('<li>' + concept.name + '<button class="know-more-btn">Know More</button></li>');
                    });
                },
                error: function (xhr, status, error) {
                    $('#loading').hide();
                    alert('Error analyzing image: ' + error);
                }
            });
        } else {
            alert('Please enter an image URL.');
        }
    });

    $(document).on('click', '.know-more-btn', function () {
        const conceptName = $(this).parent().text().trim();
        fetchWikipediaInfo(conceptName);
    });

    function fetchWikipediaInfo(conceptName) {
        $.ajax({
            type: 'GET',
            url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&titles=' + conceptName,
            dataType: 'jsonp',
            success: function (data) {
                const pages = data.query.pages;
                const firstPageId = Object.keys(pages)[0];
                const extract = pages[firstPageId].extract;
                $('#wikipediaInfo').removeClass('hidden');
                $('#infoContent').html(DOMPurify.sanitize(extract));
            },
            error: function (xhr, status, error) {
                alert('Error fetching Wikipedia information: ' + error);
            }
        });
    }
});
