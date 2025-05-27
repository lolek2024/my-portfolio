import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-8 text-center">Skills</h3>
        <p className="mb-10 text-center text-gray-600">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Skill 1 */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xl font-medium text-gray-700">NestJS</span>
              <span className="text-sm text-gray-500">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-600 h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>

          {/* Skill 2 */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xl font-medium text-gray-700">MySQL</span>
              <span className="text-sm text-gray-500">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-green-600 h-4 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>

          {/* Skill 3 */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xl font-medium text-gray-700">TypeScript</span>
              <span className="text-sm text-gray-500">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
