from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import sys
class Handler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map, '.vcf': 'text/vcard; charset=utf-8'}
    def end_headers(self):
        if self.path.split('?')[0].endswith('.vcf'):
            self.send_header('Content-Disposition', 'attachment; filename="Olivia-Brutus.vcf"')
        super().end_headers()
print('Tarjeta: http://localhost:4174/', flush=True)
ThreadingHTTPServer(('127.0.0.1', 4174), partial(Handler, directory=sys.argv[1] if len(sys.argv)>1 else '.')).serve_forever()
