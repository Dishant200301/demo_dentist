import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import AnimateOnScroll from '@/modules/core/components/AnimateOnScroll';
import { Calendar, Tag, Facebook, Twitter, Linkedin, Loader2, Info } from 'lucide-react';
import { API_BASE_URL, getPublicHeaders } from '@/modules/appointments/utils/apiConfig';

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Try to fetch by slug first as it's the standard for SEO
        const resp = await fetch(`${API_BASE_URL}/blogs/slug/${id}`, {
          headers: getPublicHeaders()
        });
        const data = await resp.json();
        
        if (data.success && data.data) {
          setPost(data.data);
        } else {
          // Fallback to fetch by ID if slug not found (handling legacy links)
          const respId = await fetch(`${API_BASE_URL}/blogs/${id}`, {
            headers: getPublicHeaders()
          });
          const dataId = await respId.json();
          if (dataId.success) setPost(dataId.data);
          else setPost(null);
        }
      } catch (e) {
        console.error('Error fetching blog', e);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-[#F8F9FA]">
        <Loader2 className="w-10 h-10 animate-spin text-[#00ADEE]" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-[#F8F9FA]">
        <Info className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-[#15224D]">Article Not Found</h2>
        <p className="text-[#424C6F] mt-2 mb-6">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="px-6 py-3 bg-[#00ADEE] text-white rounded-full font-bold hover:bg-[#15224D] transition-colors">
          Back to Insights
        </Link>
      </div>
    );
  }

  const dateStr = post.publishDate ? new Date(post.publishDate).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  }) : 'Recent';

  // Helper to render content sections
  const renderContent = () => {
    if (!post.content) return null;

    // Handle string content (legacy) or structured object
    if (typeof post.content === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: post.content }} />;
    }

    const { content } = post;
    return (
      <div className="space-y-8">
        {content.introParagraphs?.map((p: string, i: number) => (
          <p key={i} className="text-[18px] leading-[1.8]">{p}</p>
        ))}

        {content.blockquote && (
          <blockquote className="border-l-4 border-[#00ADEE] pl-6 py-2 my-8 italic text-[20px] text-[#15224D] font-medium bg-[#00ADEE]/5 rounded-r-lg">
            "{content.blockquote}"
          </blockquote>
        )}

        {content.middleParagraph && (
          <p className="text-[18px] leading-[1.8]">{content.middleParagraph}</p>
        )}

        {(content.sectionTitle || content.sectionSubtitle) && (
          <div className="mt-12 mb-6">
            {content.sectionTitle && <h2 className="text-[28px] sm:text-[32px] font-bold text-[#15224D] mb-4">{content.sectionTitle}</h2>}
            {content.sectionSubtitle && <p className="text-[18px] leading-[1.8] mb-6">{content.sectionSubtitle}</p>}
          </div>
        )}

        {content.bulletPoints && content.bulletPoints.length > 0 && (
          <ul className="space-y-4 my-8">
            {content.bulletPoints.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-[#00ADEE]/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-[#00ADEE]" />
                </span>
                <span className="text-[17px] leading-[1.6]">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {content.finalParagraph && (
          <p className="text-[18px] leading-[1.8] font-medium text-[#15224D] mt-8">{content.finalParagraph}</p>
        )}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - Eyora Eye Care</title>
        <meta name="description" content={`Read about ${post.title} on the Eyora Eye Care blog.`} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] xl:rounded-[20px] overflow-hidden mx-0 sm:mx-0 lg:mx-0 xl:mx-[14px] xl:mt-4 mb-4 lg:mb-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image || '/images/hero/hero-bg.jpg'})` }}
        />
        <div className="absolute inset-0 bg-[#15224D]/80 mix-blend-multiply" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-[40px] sm:pt-16">
          <AnimateOnScroll>
            <h1 className="font-sans text-[24px] sm:text-[40px] lg:text-[50px] xl:text-[60px] text-white mb-4 sm:mb-6 leading-[1.2] sm:leading-[1.1] max-w-[1200px] mx-auto tracking-[-1px]">
              {post.title}
            </h1>
            <div className="flex flex-row sm:flex-row items-center justify-center gap-[10px] sm:gap-6 text-white text-[14px] sm:text-[15.5px]">
              <div className="flex items-center gap-2">
                <Calendar className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" strokeWidth={2} />
                <span>{dateStr}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" strokeWidth={2} />
                <span>{post.category || 'Eye Care'}</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="pt-0 bg-[#F8F9FA] overflow-hidden min-h-screen">
        <section className="py-[60px] lg:py-[100px] container-padding max-w-[900px] mx-auto text-[#424C6F]">
          <AnimateOnScroll delay={0.1}>
            {renderContent()}
          </AnimateOnScroll>

          {/* Tags & Social */}
          <AnimateOnScroll delay={0.2}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[15px] sm:gap-[20px] mt-[40px] sm:mt-[60px] pb-[30px] sm:pb-[40px] border-b border-[#15224D]/10">
              <div className="flex items-center gap-[10px] sm:gap-[15px] flex-wrap">
                <span className="text-[#15224D] font-bold text-[16px] sm:text-[18px]">Tags:</span>
                {(post.content?.tags || post.tags) ? (
                  (post.content?.tags || post.tags).map((tag: string) => (
                    <span key={tag} className="bg-[#00ADEE]/10 text-[#00ADEE] text-[12px] sm:text-[13px] font-semibold px-[15px] sm:px-[20px] py-[6px] sm:py-[8px] rounded-full">{tag}</span>
                  ))
                ) : (
                  <span className="bg-[#00ADEE]/10 text-[#00ADEE] text-[12px] sm:text-[13px] font-semibold px-[15px] py-[6px] rounded-full">Health</span>
                )}
              </div>
              <div className="flex items-center gap-[10px]">
                <a href="#" className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white hover:bg-[#15224D] transition-colors">
                  <Facebook className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" fill="currentColor" />
                </a>
                <a href="#" className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white hover:bg-[#15224D] transition-colors">
                  <Twitter className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" fill="currentColor" />
                </a>
                <a href="#" className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] rounded-full bg-[#00ADEE] flex items-center justify-center text-white hover:bg-[#15224D] transition-colors">
                  <Linkedin className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]" fill="currentColor" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
      </div>
    </>
  );
};

export default BlogDetails;
