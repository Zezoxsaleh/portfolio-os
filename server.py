import http.server
import socketserver
import os
import sys

PORT = int(os.environ.get("PORT", 4173))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class PortfolioHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

def run():
    with socketserver.TCPServer(("127.0.0.1", PORT), PortfolioHTTPRequestHandler) as httpd:
        print(f"Portfolio OS running at http://127.0.0.1:{PORT}/")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    run()
