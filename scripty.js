function domReady(fn) {
            if (
                document.readyState === "complete" ||
                document.readyState === "interactive"
            ) {
                setTimeout(fn, 1000);
            } else {
                document.addEventListener("DOMContentLoaded", fn);
            }
        }

        domReady(function () {
            function onScanSuccess(decodeText, decodeResult) {
                alert("Your QR Code is: " + decodeText, decodeResult);
            }

            let htmlscanner = new Html5QrcodeScanner(
                "my-qr-reader",
                { fps: 10, qrbox: 250 }
            );
            htmlscanner.render(onScanSuccess);
        });