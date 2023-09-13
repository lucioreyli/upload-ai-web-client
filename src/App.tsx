import { Button } from './components/ui/button';

export function App() {
  return (
    <main>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="font-semibold">upload.ai</h1>
        <div>
          <span>Desenvolvido com 💜 na NLW da Rocketseat</span>
          <Button>
            <a href="https://github.com/lucioreyli/upload-ai-web-client">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
