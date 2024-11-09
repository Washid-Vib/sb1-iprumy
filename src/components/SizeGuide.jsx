import React from 'react';
import { X } from 'lucide-react';

export default function SizeGuide({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
        <div className="relative bg-white rounded-xl max-w-2xl w-full p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Size Guide</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Size</th>
                    <th className="px-4 py-2 text-left">Wrist Circumference</th>
                    <th className="px-4 py-2 text-left">Case Diameter</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-2">Small</td>
                    <td className="px-4 py-2">15-17 cm</td>
                    <td className="px-4 py-2">38 mm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Medium</td>
                    <td className="px-4 py-2">17-19 cm</td>
                    <td className="px-4 py-2">40 mm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Large</td>
                    <td className="px-4 py-2">19-21 cm</td>
                    <td className="px-4 py-2">42 mm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">How to Measure</h3>
              <p className="text-blue-600">
                Wrap a flexible measuring tape around your wrist where you typically wear your watch.
                The tape should be snug but not tight. If you don't have a measuring tape, you can
                use a strip of paper and measure it against a ruler.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}