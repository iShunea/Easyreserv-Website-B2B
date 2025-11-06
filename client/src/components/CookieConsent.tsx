import { useState } from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { X, Settings, Cookie } from 'lucide-react';
import { Link } from 'wouter';

export function CookieConsent() {
  const { t, language } = useLanguage();
  const { hasConsented, acceptAll, rejectAll, setCustomPreferences } = useCookieConsent();
  const [showCustomize, setShowCustomize] = useState(false);
  const [customPrefs, setCustomPrefs] = useState({
    essential: true,
    analytics: true,
  });

  if (hasConsented) {
    return null;
  }

  if (showCustomize) {
    return (
      <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 md:max-w-5xl md:mx-auto z-50" data-testid="cookie-customize-modal">
        <Card className="shadow-2xl border-2 bg-white dark:bg-gray-900">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{t('cookie_consent.settings_title')}</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCustomize(false)}
                data-testid="button-close-customize"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">{t('cookie_consent.settings_desc')}</p>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex-1">
                  <Label className="text-sm font-medium text-gray-900 dark:text-white">{t('cookie_consent.essential')}</Label>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">{t('cookie_consent.essential_desc')}</p>
                </div>
                <Switch
                  checked={true}
                  disabled={true}
                  data-testid="switch-essential"
                />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <Label className="text-sm font-medium text-gray-900 dark:text-white">{t('cookie_consent.analytics')}</Label>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">{t('cookie_consent.analytics_desc')}</p>
                </div>
                <Switch
                  checked={customPrefs.analytics}
                  onCheckedChange={(checked) => setCustomPrefs({ ...customPrefs, analytics: checked })}
                  data-testid="switch-analytics"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowCustomize(false)}
                size="sm"
                className="text-xs"
                data-testid="button-cancel-customize"
              >
                {t('nav.menu')}
              </Button>
              <Button
                onClick={() => {
                  setCustomPreferences(customPrefs);
                  setShowCustomize(false);
                }}
                size="sm"
                className="flex-1 bg-primary hover:bg-primary/90 text-white text-xs"
                data-testid="button-save-preferences"
              >
                {t('cookie_consent.save_preferences')}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 md:max-w-5xl md:mx-auto z-50" data-testid="cookie-consent-banner">
      <Card className="shadow-2xl border-2 bg-white dark:bg-gray-900">
        <div className="flex flex-col md:flex-row md:items-center gap-4 p-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {t('cookie_consent.title')}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('cookie_consent.description')}{' '}
                <Link 
                  href={language === 'ro' ? '/policies' : `/${language}/policies`} 
                  className="text-primary font-medium hover:underline"
                  data-testid="link-cookie-policy"
                >
                  {t('cookie_consent.learn_more')}
                </Link>
              </p>
            </div>
          </div>
          <div className="flex gap-2 md:flex-shrink-0">
            <Button
              variant="outline"
              onClick={rejectAll}
              size="sm"
              className="text-xs"
              data-testid="button-reject-all"
            >
              {t('cookie_consent.reject_all')}
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowCustomize(true)}
              size="sm"
              className="text-xs"
              data-testid="button-customize"
            >
              <Settings className="w-3 h-3 mr-1.5" />
              {t('cookie_consent.customize')}
            </Button>
            <Button
              onClick={acceptAll}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white text-xs"
              data-testid="button-accept-all"
            >
              {t('cookie_consent.accept_all')}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
