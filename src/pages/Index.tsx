import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSite, setGeneratedSite] = useState(null);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    
    setIsGenerating(true);
    // Симуляция генерации сайта
    setTimeout(() => {
      setGeneratedSite({
        url: 'https://your-awesome-site.poehali.dev',
        preview: '/img/8d5d3ad3-3873-4e0b-bae8-847c9af1af48.jpg'
      });
      setIsGenerating(false);
    }, 3000);
  };

  const templates = [
    {
      id: 1,
      name: 'Современный Бизнес',
      category: 'Бизнес',
      image: '/img/8d5d3ad3-3873-4e0b-bae8-847c9af1af48.jpg',
      description: 'Элегантный дизайн для современных компаний'
    },
    {
      id: 2,
      name: 'Интернет-магазин',
      category: 'E-commerce',
      image: '/img/8d5d3ad3-3873-4e0b-bae8-847c9af1af48.jpg',
      description: 'Готовое решение для онлайн-торговли'
    },
    {
      id: 3,
      name: 'Творческое Портфолио',
      category: 'Портфолио',
      image: '/img/8d5d3ad3-3873-4e0b-bae8-847c9af1af48.jpg',
      description: 'Яркий дизайн для креативных профессионалов'
    },
    {
      id: 4,
      name: 'Ресторан',
      category: 'Ресторан',
      image: '/img/8d5d3ad3-3873-4e0b-bae8-847c9af1af48.jpg',
      description: 'Аппетитный дизайн для заведений'
    },
    {
      id: 5,
      name: 'Технологический Стартап',
      category: 'Стартап',
      image: '/img/8d5d3ad3-3873-4e0b-bae8-847c9af1af48.jpg',
      description: 'Инновационный дизайн для tech-компаний'
    },
    {
      id: 6,
      name: 'Образовательная Платформа',
      category: 'Образование',
      image: '/img/8d5d3ad3-3873-4e0b-bae8-847c9af1af48.jpg',
      description: 'Удобный интерфейс для обучения'
    }
  ];

  const examples = [
    {
      title: 'Агентство веб-дизайна',
      url: 'https://design-agency.poehali.dev',
      image: '/img/8d5d3ad3-3873-4e0b-bae8-847c9af1af48.jpg',
      description: 'Создан за 30 секунд по описанию "современное агентство веб-дизайна с портфолио"'
    },
    {
      title: 'Фитнес-студия',
      url: 'https://fitness-studio.poehali.dev',
      image: '/img/8d5d3ad3-3873-4e0b-bae8-847c9af1af48.jpg',
      description: 'Запрос: "сайт для фитнес-студии с расписанием занятий и тренерами"'
    },
    {
      title: 'Кофейня',
      url: 'https://cozy-coffee.poehali.dev',
      image: '/img/8d5d3ad3-3873-4e0b-bae8-847c9af1af48.jpg',
      description: 'Описание: "уютная кофейня с меню, атмосферой и контактами"'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">AI Website Builder</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Главная</Button>
            <Button variant="ghost">Конструктор</Button>
            <Button variant="ghost">Примеры</Button>
            <Button className="gradient-primary text-white">Начать создание</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            <Icon name="Zap" size={16} className="mr-1" />
            Создай сайт за секунды
          </Badge>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Создавай сайты
            <br />
            <span className="gradient-text">силой ИИ</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Просто опиши свою идею, и наша нейросеть создаст для тебя потрясающий сайт.
            Без кода, без дизайна — только твоё воображение.
          </p>

          {/* AI Constructor */}
          <Card className="max-w-2xl mx-auto mb-12 animate-scale-in glass-card border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Icon name="Brain" size={24} className="text-primary" />
                <span>AI Конструктор</span>
              </CardTitle>
              <CardDescription>
                Опиши свой будущий сайт на русском языке
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Например: Создай сайт для кофейни с уютной атмосферой, меню, галереей и контактами. Используй тёплые цвета и современный дизайн..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-32 text-base"
              />
              <Button 
                onClick={handleGenerate}
                disabled={!description.trim() || isGenerating}
                className="w-full gradient-primary text-white text-lg py-6"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Создаю твой сайт...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Создать сайт
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Site Result */}
          {generatedSite && (
            <Card className="max-w-2xl mx-auto animate-scale-in">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center justify-center space-x-2">
                  <Icon name="CheckCircle" size={24} />
                  <span>Сайт готов!</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={generatedSite.preview} 
                    alt="Предпросмотр сайта" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-2 p-3 bg-accent/50 rounded-lg">
                  <Icon name="Globe" size={20} className="text-primary" />
                  <Input value={generatedSite.url} readOnly className="bg-transparent border-none" />
                  <Button size="sm" variant="outline">
                    <Icon name="Copy" size={16} />
                  </Button>
                </div>
                <Button className="w-full gradient-primary text-white">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Опубликовать в интернет
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Templates Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Готовые шаблоны</h2>
          <p className="text-xl text-muted-foreground">Выбери шаблон и адаптируй под свои потребности</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{template.name}</h3>
                    <Badge variant="secondary">{template.category}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{template.description}</p>
                  <Button className="w-full" variant="outline">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Предпросмотр
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Examples Section */}
      <section className="container mx-auto px-4 py-20 bg-accent/30">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Примеры созданных сайтов</h2>
          <p className="text-xl text-muted-foreground">Посмотри, что создали другие пользователи</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{example.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{example.description}</p>
                  <div className="flex items-center space-x-2 text-primary">
                    <Icon name="Globe" size={16} />
                    <span className="text-sm font-medium">{example.url}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Готов создать свой сайт?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйся к тысячам пользователей, которые уже создали свои сайты с помощью ИИ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <span className="font-bold text-lg">AI Website Builder</span>
              </div>
              <p className="text-muted-foreground">
                Создавай потрясающие сайты силой искусственного интеллекта
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Конструктор</li>
                <li>Шаблоны</li>
                <li>Примеры</li>
                <li>Цены</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Документация</li>
                <li>Помощь</li>
                <li>Контакты</li>
                <li>Статус</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>О нас</li>
                <li>Блог</li>
                <li>Карьера</li>
                <li>Пресса</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AI Website Builder. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}