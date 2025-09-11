import fs from 'fs';
import path from 'path';

function findHardcodedTexts(directory) {
    const hardcodedTexts = {};

    function traverseDirectory(dir) {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                traverseDirectory(fullPath);
            } else if (file.match(/\.(tsx|ts|js|jsx)$/)) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                
                // Regex to find string literals not inside t() function
                const textMatches = content.match(/(?<!t\(['"]\s*)(['"])([^'"]+)\1/g) || [];
                
                const filteredTexts = textMatches
                    .map(match => match.replace(/^['"]|['"]$/g, ''))
                    .filter(text => 
                        text.length >= 3 && 
                        !text.toUpperCase().match(/^[A-Z0-9_]+$/) && 
                        !text.match(/^(http|src\/|data:)/) &&
                        !text.match(/^[a-z0-9_\-\.]+$/)
                    );
                
                if (filteredTexts.length > 0) {
                    hardcodedTexts[fullPath] = filteredTexts;
                }
            }
        });
    }

    traverseDirectory(directory);
    return hardcodedTexts;
}

function sanitizeKey(text) {
    return text.toLowerCase().replace(/[^a-z0-9_]/g, '_');
}

function categorizeText(text, filename) {
    const lowerFilename = filename.toLowerCase();
    if (lowerFilename.includes('nav')) return 'navbar';
    if (lowerFilename.includes('home')) return 'home';
    if (lowerFilename.includes('about')) return 'about';
    if (lowerFilename.includes('service')) return 'services';
    if (lowerFilename.includes('skill')) return 'skills';
    if (lowerFilename.includes('testimonial')) return 'testimonials';
    if (lowerFilename.includes('contact')) return 'contact';
    return 'common';
}

function generateTranslationReport(hardcodedTexts) {
    const translations = {
        navbar: {},
        home: {},
        about: {},
        services: {},
        skills: {},
        testimonials: {},
        contact: {},
        common: {}
    };

    let report = '# Hardcoded Text Translation Report\n\n## Identified Texts Requiring Translation\n\n| File | Original Text | Suggested i18n Key | Namespace |\n|------|--------------|-------------------|----------|\n';

    Object.entries(hardcodedTexts).forEach(([filepath, texts]) => {
        texts.forEach(text => {
            const namespace = categorizeText(text, filepath);
            let key = sanitizeKey(text);
            
            // Avoid duplicate keys
            const baseKey = key;
            let counter = 1;
            while (translations[namespace][key]) {
                key = `${baseKey}_${counter}`;
                counter++;
            }
            
            translations[namespace][key] = text;
            report += `| ${filepath} | ${text} | ${namespace}.${key} | ${namespace} |\n`;
        });
    });

    // Ensure reports/translations directory exists
    if (!fs.existsSync('reports/translations')) {
        fs.mkdirSync('reports/translations', { recursive: true });
    }

    // Write translations
    fs.writeFileSync('reports/translations/translation_keys.json', 
        JSON.stringify(translations, null, 2), 
        'utf-8'
    );

    // Write report
    fs.writeFileSync('reports/translations/hardcoded_texts.md', report, 'utf-8');

    console.log('Translation scan complete. Check reports/translations/ for results.');
}

const hardcodedTexts = findHardcodedTexts('src');
generateTranslationReport(hardcodedTexts);
