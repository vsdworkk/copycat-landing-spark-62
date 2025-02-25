import { useState, useCallback, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Bold, Italic, Undo, Type, List, ListOrdered } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';

interface StarExample {
  situation: string;
  task: string;
  action: string;
  result: string;
}

interface FinalPreviewProps {
  starExample1: StarExample;
  starExample2: StarExample;
}

export const FinalPreview = ({ starExample1, starExample2 }: FinalPreviewProps) => {
  const { toast } = useToast();
  const [wordCount, setWordCount] = useState(0);

  const formatStarExample = (example: StarExample, number: number) => {
    return `
# STAR Example #${number}

## Situation
${example.situation}

## Task
${example.task}

## Action
${example.action}

## Result
${example.result}
`;
  };

  const initialContent = `${formatStarExample(starExample1, 1)}\n\n${formatStarExample(starExample2, 2)}`;

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true })
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      const text = editor.getText();
      const words = text.trim().split(/\s+/).length;
      setWordCount(words);

      // Simple grammar checks
      if (text.includes("  ")) {
        toast({
          title: "Writing Tip",
          description: "Avoid using double spaces between words.",
          variant: "default",
        });
      }

      if (text.toLowerCase().includes("very")) {
        toast({
          title: "Writing Tip",
          description: "Consider using stronger, more specific words instead of 'very'.",
          variant: "default",
        });
      }
    },
  });

  useEffect(() => {
    if (editor) {
      const text = editor.getText();
      setWordCount(text.trim().split(/\s+/).length);
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-black font-poppins">
          Final Preview
        </h1>
        <p className="text-gray-600 text-lg font-roboto">
          Review and edit your STAR examples below ✨
        </p>
        <div className="text-sm text-gray-500">
          Word count: {wordCount}
        </div>
      </div>

      <Card className="p-8 bg-white shadow-lg">
        <div className="sticky top-0 z-10 bg-white border-b pb-4 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'bg-slate-200' : ''}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'bg-slate-200' : ''}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor.isActive('heading', { level: 2 }) ? 'bg-slate-200' : ''}
            >
              <Type className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? 'bg-slate-200' : ''}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive('orderedList') ? 'bg-slate-200' : ''}
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
            >
              <Undo className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ScrollArea className="h-[600px] w-full rounded-md border p-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="prose prose-slate max-w-none">
            <EditorContent editor={editor} />
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};