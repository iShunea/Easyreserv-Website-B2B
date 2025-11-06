import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { CookieConsent } from "@/components/CookieConsent";
import NotFound from "@/pages/not-found";

import { Homepage } from "@/pages/Homepage";
import { AboutUs } from "@/pages/AboutUs";
import { Solutions } from "@/pages/Solutions";
import { Hardware } from "@/pages/Hardware";
import { Pricing } from "@/pages/Pricing";
import { Contact } from "@/pages/Contact";
import { Policies } from "@/pages/Policies";
import { Blog } from "@/pages/Blog";
import { BlogArticle } from "@/pages/BlogArticle";

function Routes() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/hardware" component={Hardware} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/policies" component={Policies} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogArticle} />
        
        <Route path="/:lang(ro|ru|en)" component={Homepage} />
        <Route path="/:lang(ro|ru|en)/about" component={AboutUs} />
        <Route path="/:lang(ro|ru|en)/solutions" component={Solutions} />
        <Route path="/:lang(ro|ru|en)/hardware" component={Hardware} />
        <Route path="/:lang(ro|ru|en)/pricing" component={Pricing} />
        <Route path="/:lang(ro|ru|en)/contact" component={Contact} />
        <Route path="/:lang(ro|ru|en)/policies" component={Policies} />
        <Route path="/:lang(ro|ru|en)/blog" component={Blog} />
        <Route path="/:lang(ro|ru|en)/blog/:slug" component={BlogArticle} />
        
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <LanguageProvider>
          <CookieConsentProvider>
            <TooltipProvider>
              <Toaster />
              <Routes />
              <CookieConsent />
            </TooltipProvider>
          </CookieConsentProvider>
        </LanguageProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
